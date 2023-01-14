git config --global user.email $mail
git config --global user.name $name
git remote set-url origin https://$username:$token@github.com/$username/SansGirisimBayiListesi.git
if git status --porcelain | grep -q '*'; then 
	git add .
	git commit -am 'update data'
	echo $username | echo $token | git push -f origin HEAD:master
else
	echo 'No changes detected'
fi