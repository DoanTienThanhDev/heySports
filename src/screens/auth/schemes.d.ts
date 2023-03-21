interface IUserLogin {
  email: string,
  password: string
}

interface IUserInfo extends IUserLogin {
  fullName: string,
  gender: string,
  dateOfBirth?: string,
}