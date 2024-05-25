## Hii

## Run Client & Server


## Search TODO in Vs Code to complete


```bash
#for client
npm run dev

#for database add .env variables
npx prisma db generate
npx prisma db push

##(not need if there is no chnages created on schema.prisma file)


#for checking DB studio
npx prisma studio

#for running the email server
npm run email

```


## Checkout .env variables (Don't Share with others)


```bash

1.Create a .env file in the root directory or change only the existing .env.example to .env

#cleck auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cHVyZS1zYWxtb24tOTIuY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_ehpbCQAl910E76VG2NNQpWriD1gYwIB1EGSBY6p4Tg
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#databse secrets
DATABASE_URL='mysql://avnadmin:AVNS_5b0-wi6NIvI4Uy60zCq@dev-commune-plura-db.i.aivencloud.com:28966/defaultdb?ssl-mode=REQUIRED'


#uploadthing for image upload
UPLOADTHING_SECRET=sk_live_12d72f75b30ba7ab9af67f8a8dbee7181956f917a2e5d4c5a20ea29581ada9f7
UPLOADTHING_APP_ID=hpdwc2vfy6

#client url
NEXTAUTH_URL=http://localhost:3000


#Resend Api keys (for send email)
RESEND_API_KEY = re_8XC4ZjXf_8w7Z381pN5i1yYSJaU8thNXD
RESEND_EMAIL = dev-commune@resend.dev



```
