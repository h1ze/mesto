export class UserInfo {
    constructor({userNameSelector, userDescriptionSelector, userAvatarSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userDescription = document.querySelector(userDescriptionSelector);
        this._userAvatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        const userInfo = {
            name: this._userName.textContent,
            about: this._userDescription.textContent,
            avatar: this._userAvatar.src,
         };
         return userInfo;
    }

    setUserInfo({name, about, avatar = this._userAvatar.src}) {
        this._userName.textContent = name;
        this._userDescription.textContent = about;
        this._userAvatar.src = avatar;
    }
}