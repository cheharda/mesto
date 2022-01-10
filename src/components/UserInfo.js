export default class UserInfo {
    constructor(nameSelector, jobSelector, avatar) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = avatar;
    }
        
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
            avatar: this._avatar
        };
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
        this._avatar.src = data.avatar;
        this._id = data._id;
    }

    getUserId() {
        return this._id;
      }
}