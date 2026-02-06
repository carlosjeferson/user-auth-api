import { loginService } from '../services/authService.js';
import { loginSchema } from '../validations/authValidation.js';
export async function login(req, res) {
    const { email, password } = loginSchema.parse(req.body);
    const result = await loginService(email, password);
    return res.status(200).json(result);
}
//# sourceMappingURL=authController.js.map