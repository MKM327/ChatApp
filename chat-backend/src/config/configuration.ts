export default () => ({
    port:parseInt(process.env.DB_PORT,10) ||5432,
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
})