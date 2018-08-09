require 'test_helper'

class UsersProfileTest < ActionDispatch::IntegrationTest

  def setup
    @user = users(:michael)
  end

  test "profile display" do
    get user_path(@user)
    assert_template 'users/show'
    assert_select 'title', full_title(@user.name)
    assert_select '.box-user-info h1', text: @user.name
    assert_select '.box-user-image img.gravatar'
    assert_match @user.microposts.count.to_s, response.body
    assert_select '.stats #following', text: @user.following.count.to_s
    assert_select '.stats #followers', text: @user.followers.count.to_s
    assert_select 'div.pagination', count: 1
    @user.microposts.paginate(page: 1).each do |micropost|
      assert_match micropost.content, response.body
    end
  end

  test "stats display" do
    log_in_as(@user)
    get root_path
    assert_select '.stats #following', text: @user.following.count.to_s
    assert_select '.stats #followers', text: @user.followers.count.to_s
  end
end
