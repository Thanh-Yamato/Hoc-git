Mot so cau lenh ve git:
- git init: De khoi tao 1 du an voi git.
- git status: De xem trang thai cua cac tep, thu muc minh da lam nhu them thu muc, sua.
- git add File_name.extension: De them thong tin cac thu muc minh da chinh sua.(Dung git add . de add tat ca)
- git commit -m " Thong tin minh can them de moi nguoi biet minh da sua gi": Dung de dong hop minh da chinh sua cung voi thong tin nhung gi minh da sua.
- git log: De xem nhung gi minh da commit, thay doi, tao truoc day(Giong nhu lich su commit).
- git show Ma_cua_tem: Dung de xem nhung gi minh da sua trong commit do.
- git diff: Dung de xem nhung thay doi ma minh chua dung lenh git add(nhung file mau do khi dung lenh git status).
- Mot so thuat ngu: Tao hay code them trong file roi luu la Working directory ---git add--> Staging directory ---git commit--> Git repository.
	+ Working directory: La thu muc ma minh dang lam viec.
	+ Staging area: La vung nhung file minh da dung git add nhung chua commit
	+ Git repository: La vung ma nhung gi minh da commit.
- git restore file_name.ext: Dung de xoa nhung thay doi minh moi luu khoi phan Working directory.(Giong voi nhung gi minh luu roi Ctrl+z cho den khi chua chinh sua gi).
- git restore --staged File_name.ext: Dung de chuyen nhung tu Staging area ve Working directory, nghia la minh dung git add de them file vao vung Staging area roi lai cho no ve lai nhu chua dung git add
- git checkout -b Ten_nhanh_moi: Tao ra mot nhanh moi va chuyen den nhanh moi nay de lam viec.
- git branch: Xem cac nhanh, trong do nhanh chinh la master la nhanh chay dung it loi nhat.(Lam cac nhanh khac dung roi moi merge vao nhanh master nay)
- git checkout Ten_nhanh: De di chuyen den nhanh minh can lam viec hoac xem.
- git branch -D Ten_nhanh: De xoa 1 nhanh nao do khi khong con can thiet nua nhu thuc hien xong nhiem vu hoac bi loi.(Co the xoa luon ca nhanh/branch master)
- git merge Ten_nhanh: De gop nhung gi minh da lam vao nhanh khac.
- git reset --soft Ma_commit: Dung de chuyen tu Git repository ve Staging area.
- git reset --mixed Ma_commit: Dung de chuyen tu Git repository hoac Staging area ve working directory.
- git reset --hard Ma_commit: Dung de xoa luon commit va nhung thay doi cua commit do.(Han che dung, dung de bi mat ma minh da viet)
- git revert Ma_commit: Dung de lay mot commit cho len dau de thay doi ma khong thay doi cac commit o giua.(Han che dung, dung de bi mat ma minh da viet)
- File .gitignore: Tao file .gitignore de bo qua cac file,thu muc minh khong muon commit vao Git repository.
- git remote add origin Link_github: Để tạo liên kết file lên trên github.
- git remote -v: De xem duong dan de push va fetch.
- git push -u origin master: Để push các file trong nhánh master lên trên github khi lần đầu push.
- git push: Để push các thay đổi lên github những lần sau.
- git clone Link_github: De tai git repo ve may lan dau.
- git pull: De tai nhung commit da thay doi ve may.
- git push origin Ten_branch: Dung de them 1 branch len github.
- git pull origin master: De tai nhung commit da thay doi ve may.
- git push origin Ten_branch: Dung de them 1 branch len github.
- git fetch origin Ten_branch: Dung de tai code nguoi khac da pull len tren branch cua ho ve may minh de kiem tra code => git checkout Ten_branch_do: Dung de chuyen sang branch do de xem.
- De thoat khoi nhung thu minh khong thoat duoc: 
	+ Nhan q.
	+ Nhan vai lan phim Esc => Nhan :q! => Nhan Enter. 
- Khi bi xay ra loi conflict(Loi do hai nguoi cung lam chinh sua cung 1 file va cung bat dau tu 1 dong). De giai quyet confict co 2 cach:
	* Cach 1:(Nen xem xet it dung -f vi no se thay doi lich su commit, han che dung khi lam chung branch voi nhieu nguoi.)
		+ Go lenh git rebase master: De tai cac file co confict ve chinh sua tren branch minh muon sua.
		+ Sau do sua lai.
		+ git add Ten_file.
		+ git rebase --continue.
		+ git push origin Ten_nhanh -f: De sua lai thu tu commit, tuc la thay commit cu da bi conflict roi commit lai de pull request chu khong phai them commit moi.
	* Cach 2: 
	+ Go lenh git checkout master: De chuyen sang nhanh master.
	+ git pull: De tai tat ca cac commit moi nhat ve.
	+ git checkout Ten_branch: De chuyen sang nhanh minh can chinh sua de giai quyet conflict.
	+ git merge master: Gop ma tu master vao nhanh dang lam viec, sau do xem file se thay doan bi conflict.
	+ Chinh sua file co conflict. 
	+ git add Ten_file.
	+ git commit -m "Noi dung cua commit".
	+ git push origin Ten_branch.
- Mot so thu hoc them:
	+ Markdown: Markdown cheatsheet, markdown(online) editor.
	+ Oh my zsh: Lam dep giao dien cmd.
	+ Hoc them ve git: https://www.atlassian.com/git/tutorials.
	+ Text/code editor: Dung Vim hoac Nano. 