// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import UserModel, { User } from '../models/User';

// interface AuthenticatedRequest extends Request {
//   user?: User;
//   token?: string;
// }

// const auth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');
//   if (!token) {
//     return res.status(401).send({ error: 'Authentication required' });
//   }
//   try {
//     const decoded = jwt.verify(token, 'your_jwt_secret') as { _id: string, isAdmin: boolean };
//     const user = await UserModel.findOne({ _id: decoded._id, 'tokens.token': token });
//     if (!user) {
//       throw new Error();
//     }
//     req.user = user;
//     req.token = token;
//     next();
//   } catch (e) {
//     res.status(401).send({ error: 'Please authenticate' });
//   }
// };

// const adminAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(403).send({ error: 'Admin access required' });
//   }
// };

// export { auth, adminAuth };
