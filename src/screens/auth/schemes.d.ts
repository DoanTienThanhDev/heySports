interface IUserLogin {
  email: string,
  password: string
}

interface IUserRegister extends IUserLogin {
  fullName: string,
  dateOfBirth: string,
  gender: string,
  password: string,
  confirmPassword: string
}