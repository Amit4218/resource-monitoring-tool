import crypto from "crypto";
import bcrypt from "bcrypt";

const generateApiKey = async () => {
    
  const token = crypto.randomUUID();

  const hashedApiKey = await bcrypt.hash(token, 12);

  return hashedApiKey;
};

export default generateApiKey;
