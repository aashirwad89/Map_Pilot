// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Mail, Lock, User, Eye, EyeOff, Zap } from 'lucide-react'

// function Auth() {
//   const [isLogin, setIsLogin] = useState(true)
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)

//   // Login form state
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   })

//   // Signup form state
//   const [signupData, setSignupData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//   })

//   // Form validation
//   const [errors, setErrors] = useState({})

//   // Handle login change
//   const handleLoginChange = (e: { target: { name: any; value: any } }) => {
//     const { name, value } = e.target
//     setLoginData(prev => ({ ...prev, [name]: value }))
//     if (errors) {
//       setErrors(prev => ({ ...prev, [name]: '' }))
//     }
//   }

//   // Handle signup change
//   const handleSignupChange = (e: { target: { name: any; value: any } }) => {
//     const { name, value } = e.target
//     setSignupData(prev => ({ ...prev, [name]: value }))
//     if (errors) {
//       setErrors(prev => ({ ...prev, [name]: '' }))
//     }
//   }

//   // Validate login form
//   const validateLogin = () => {
//     const newErrors = {}
//     if (!loginData.email) newErrors.email = 'Email is required'
//     if (!loginData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.email = 'Invalid email'
//     }
//     if (!loginData.password) newErrors.password = 'Password is required'
//     if (loginData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters'
//     }
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   // Validate signup form
//   const validateSignup = () => {
//     const newErrors = {}
//     if (!signupData.fullName) newErrors.fullName = 'Full name is required'
//     if (signupData.fullName.length < 2) {
//       newErrors.fullName = 'Name must be at least 2 characters'
//     }
//     if (!signupData.email) newErrors.email = 'Email is required'
//     if (!signupData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.email = 'Invalid email'
//     }
//     if (!signupData.password) newErrors.password = 'Password is required'
//     if (signupData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters'
//     }
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   // Handle login submit
//   const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     if (!validateLogin()) return

//     setLoading(true)
//     // Simulate API call
//     setTimeout(() => {
//       console.log('Login:', loginData)
//       alert(`Welcome back! Login successful for ${loginData.email}`)
//       setLoginData({ email: '', password: '' })
//       setLoading(false)
//     }, 1500)
//   }

//   // Handle signup submit
//   const handleSignupSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     if (!validateSignup()) return

//     setLoading(true)
//     // Simulate API call
//     setTimeout(() => {
//       console.log('Signup:', signupData)
//       alert(`Welcome ${signupData.fullName}! Account created successfully`)
//       setSignupData({ fullName: '', email: '', password: '' })
//       setLoading(false)
//     }, 1500)
//   }

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   }

//   const slideVariants = {
//     hidden: { opacity: 0, x: isLogin ? 100 : -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, ease: 'easeOut' },
//     },
//     exit: {
//       opacity: 0,
//       x: isLogin ? -100 : 100,
//       transition: { duration: 0.3 },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         {/* Top-right orb */}
//         <motion.div
//           className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-red-200 to-red-50 blur-3xl opacity-40"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//         />

//         {/* Bottom-left orb */}
//         <motion.div
//           className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200 to-blue-50 blur-3xl opacity-40"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 0.5 }}
//         />
//       </div>

//       {/* Main Container */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
//         <motion.div
//           className="w-full max-w-md"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Header */}
//           <motion.div variants={itemVariants} className="text-center mb-10">
//             <div className="flex items-center justify-center gap-3 mb-6">
//               <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center">
//                 <Zap className="text-white" size={28} strokeWidth={3} />
//               </div>
//               <span className="text-2xl font-bold text-slate-900">
//                 Map<span className="text-transparent bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text">Pilot</span>
//               </span>
//             </div>
//             <h1 className="text-3xl font-bold text-slate-900 mb-2">
//               {isLogin ? 'Welcome Back' : 'Join Us'}
//             </h1>
//             <p className="text-slate-600 font-light">
//               {isLogin
//                 ? 'Sign in to access your dashboard'
//                 : 'Create an account to get started'}
//             </p>
//           </motion.div>

//           {/* Form Container */}
//           <motion.div
//             className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-lg"
//             variants={itemVariants}
//           >
//             {isLogin ? (
//               // LOGIN FORM
//               <motion.form
//                 onSubmit={handleLoginSubmit}
//                 variants={slideVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 key="login"
//                 className="space-y-5"
//               >
//                 {/* Email Field */}
//                 <div className="group">
//                   <label className="block text-sm font-semibold text-slate-900 mb-2">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600"
//                       size={20}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       value={loginData.email}
//                       onChange={handleLoginChange}
//                       placeholder="you@example.com"
//                       className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all outline-none ${
//                         errors.email
//                           ? 'border-red-500 bg-red-50'
//                           : 'border-slate-200 hover:border-slate-300 focus:border-red-600 bg-white'
//                       }`}
//                     />
//                   </div>
//                   {errors.email && (
//                     <p className="text-red-600 text-xs mt-1 font-medium">
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>

//                 {/* Password Field */}
//                 <div className="group">
//                   <label className="block text-sm font-semibold text-slate-900 mb-2">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600"
//                       size={20}
//                     />
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       name="password"
//                       value={loginData.password}
//                       onChange={handleLoginChange}
//                       placeholder="••••••••"
//                       className={`w-full pl-12 pr-12 py-3 rounded-lg border-2 transition-all outline-none ${
//                         errors.password
//                           ? 'border-red-500 bg-red-50'
//                           : 'border-slate-200 hover:border-slate-300 focus:border-red-600 bg-white'
//                       }`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 transition-colors"
//                     >
//                       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                     </button>
//                   </div>
//                   {errors.password && (
//                     <p className="text-red-600 text-xs mt-1 font-medium">
//                       {errors.password}
//                     </p>
//                   )}
//                 </div>

//                 {/* Remember & Forgot */}
//                 <div className="flex items-center justify-between text-sm">
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <input type="checkbox" className="w-4 h-4 accent-red-600" />
//                     <span className="text-slate-600">Remember me</span>
//                   </label>
//                   <a href="#" className="text-red-600 hover:text-red-700 font-medium">
//                     Forgot password?
//                   </a>
//                 </div>

//                 {/* Submit Button */}
//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full mt-8 rounded-lg bg-gradient-to-r from-red-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {loading ? (
//                     <>
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity }}
//                         className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                       />
//                       Signing in...
//                     </>
//                   ) : (
//                     'Sign In'
//                   )}
//                 </motion.button>

//                 {/* Toggle to Signup */}
//                 <p className="text-center text-slate-600 text-sm mt-6">
//                   Don't have an account?{' '}
//                   <motion.button
//                     type="button"
//                     onClick={() => {
//                       setIsLogin(false)
//                       setErrors({})
//                     }}
//                     whileHover={{ scale: 1.05 }}
//                     className="text-red-600 hover:text-red-700 font-semibold"
//                   >
//                     Sign up
//                   </motion.button>
//                 </p>
//               </motion.form>
//             ) : (
//               // SIGNUP FORM
//               <motion.form
//                 onSubmit={handleSignupSubmit}
//                 variants={slideVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 key="signup"
//                 className="space-y-5"
//               >
//                 {/* Full Name Field */}
//                 <div className="group">
//                   <label className="block text-sm font-semibold text-slate-900 mb-2">
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <User
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
//                       size={20}
//                     />
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={signupData.fullName}
//                       onChange={handleSignupChange}
//                       placeholder="John Doe"
//                       className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all outline-none ${
//                         errors.fullName
//                           ? 'border-red-500 bg-red-50'
//                           : 'border-slate-200 hover:border-slate-300 focus:border-blue-600 bg-white'
//                       }`}
//                     />
//                   </div>
//                   {errors.fullName && (
//                     <p className="text-red-600 text-xs mt-1 font-medium">
//                       {errors.fullName}
//                     </p>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div className="group">
//                   <label className="block text-sm font-semibold text-slate-900 mb-2">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
//                       size={20}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       value={signupData.email}
//                       onChange={handleSignupChange}
//                       placeholder="you@example.com"
//                       className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all outline-none ${
//                         errors.email
//                           ? 'border-red-500 bg-red-50'
//                           : 'border-slate-200 hover:border-slate-300 focus:border-blue-600 bg-white'
//                       }`}
//                     />
//                   </div>
//                   {errors.email && (
//                     <p className="text-red-600 text-xs mt-1 font-medium">
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>

//                 {/* Password Field */}
//                 <div className="group">
//                   <label className="block text-sm font-semibold text-slate-900 mb-2">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock
//                       className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
//                       size={20}
//                     />
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       name="password"
//                       value={signupData.password}
//                       onChange={handleSignupChange}
//                       placeholder="••••••••"
//                       className={`w-full pl-12 pr-12 py-3 rounded-lg border-2 transition-all outline-none ${
//                         errors.password
//                           ? 'border-red-500 bg-red-50'
//                           : 'border-slate-200 hover:border-slate-300 focus:border-blue-600 bg-white'
//                       }`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 transition-colors"
//                     >
//                       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                     </button>
//                   </div>
//                   {errors.password && (
//                     <p className="text-red-600 text-xs mt-1 font-medium">
//                       {errors.password}
//                     </p>
//                   )}
//                 </div>

//                 {/* Terms */}
//                 <label className="flex items-start gap-3 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 accent-blue-600 mt-1"
//                   />
//                   <span className="text-slate-600 text-sm">
//                     I agree to the{' '}
//                     <a href="#" className="text-blue-600 hover:underline font-medium">
//                       Terms of Service
//                     </a>{' '}
//                     and{' '}
//                     <a href="#" className="text-blue-600 hover:underline font-medium">
//                       Privacy Policy
//                     </a>
//                   </span>
//                 </label>

//                 {/* Submit Button */}
//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full mt-8 rounded-lg bg-gradient-to-r from-blue-600 to-red-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {loading ? (
//                     <>
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 1, repeat: Infinity }}
//                         className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                       />
//                       Creating account...
//                     </>
//                   ) : (
//                     'Create Account'
//                   )}
//                 </motion.button>

//                 {/* Toggle to Login */}
//                 <p className="text-center text-slate-600 text-sm mt-6">
//                   Already have an account?{' '}
//                   <motion.button
//                     type="button"
//                     onClick={() => {
//                       setIsLogin(true)
//                       setErrors({})
//                     }}
//                     whileHover={{ scale: 1.05 }}
//                     className="text-blue-600 hover:text-blue-700 font-semibold"
//                   >
//                     Sign in
//                   </motion.button>
//                 </p>
//               </motion.form>
//             )}
//           </motion.div>

//           {/* Footer */}
//           <motion.p
//             variants={itemVariants}
//             className="text-center text-slate-600 text-xs mt-8"
//           >
//             © 2025 Map_pilot. Built with clarity.
//           </motion.p>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default Auth