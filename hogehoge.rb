user = User
hoge = []
for i in 1..20
  if i == 1
    user.find_by(name: "test").destroy
  else
    hoge[i] = user.find_by(name: "test#{i}").destroy
  end
end
