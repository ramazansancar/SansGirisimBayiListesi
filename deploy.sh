git config --global user.email $mail
git config --global user.name $name
git remote set-url origin https://$username:$token@github.com/$username/SansGirisimBayiListesi.git
if git status --porcelain | grep -q 'Data*'; then 
	git add --all Data/
	git add Datas_filter.json
	git add Datas.json
	git commit -am 'update data'
	echo $username | echo $token | git push -f origin HEAD:master
else
	echo 'No changes detected'
fi