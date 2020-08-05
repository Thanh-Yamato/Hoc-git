Mot so cau lenh ve git:
- git init: De khoi tao 1 du an voi git.
- git status: De xem trang thai cua cac tep, thu muc minh da lam nhu them thu muc, sua.
- git add file_name.extension: De them thong tin cac thu muc minh da chinh sua.(Dung git add . de add tat ca)
- git commit -m " Thong tin minh can them de moi nguoi biet minh da sua gi": Dung de dong hop minh da chinh sua cung voi thong tin nhung gi minh da sua.
- git log: De xem nhung gi minh da commit, thay doi, tao truoc day(Giong nhu lich su commit).
- git show Ma_cua_tem: Dung de xem nhung gi minh da sua trong commit do.
- git diff: Dung de xem nhung thay doi ma minh chua dung lenh git add(nhung file mau do khi dung lenh git status).
- Mot so thuat ngu: tao hay code them trong file roi luu la Working directory ---git add--> Staging directory ---git commit--> Git repository.
	+ Working directory: la thu muc ma minh dang lam viec.
	+ Staging area: la vung nhung file minh da dung git add nhung chua commit
	+ Git repository: la vung ma nhung gi minh da commit.
- git restore file_name.ext: dung de xoa nhung thay doi minh moi luu khoi phan Working directory.(Giong voi nhung gi minh luu roi Ctrl+z cho den khi chua chinh sua gi).
- git restore --staged file_name.ext: dung de chuyen nhung tu Staging area ve Working directory, nghia la minh dung git add de them file vao vung Staging area roi lai cho no ve lai nhu chua dung git add
- git checkout -b Ten_nhanh_moi: Tao ra mot nhanh moi va chuyen den nhanh moi nay de lam viec.
- git branch: Xem cac nhanh, trong do nhanh chinh la master la nhanh chay dung it loi nhat.(Lam cac nhanh khac dung roi moi merge vao nhanh master nay)
- git checkout Ten_nhanh: De di chuyen den nhanh minh can lam viec hoac xem.
- git branch -D Ten_nhanh: De xoa 1 nhanh nao do khi khong con can thiet nua nhu thuc hien xong nhiem vu hoac bi loi.(Co the xoa luon ca nhanh/branch master)
- git merge Ten_nhanh: De gop nhung gi minh da lam vao nhanh khac.

