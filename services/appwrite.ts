import { Appwrite } from 'appwrite'

const appwrite = new Appwrite()

appwrite
  .setEndpoint('https://appwrite.local.m7an.com/v1')
  .setProject('6239e50dcb27dc88ba0a')

export function create_Account() {
  appwrite.account
    .create('unique()', 'me@example.com', 'password', 'Jane Doe')
    .then(
      response => {
        console.log('hello')
        console.log(response)
      },
      error => {
        console.log('error')
        console.log(error)
      },
    )
}
