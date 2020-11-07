
//Dette funker fordi vi har .env fila i root. Da vet node hvor den skal finne den og importerer den uten noe export defult greier
import 'dotenv/config.js';

const PORT = process.env.PORT || 5000;

export { PORT };