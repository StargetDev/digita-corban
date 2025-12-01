import { useState } from 'react';
import { motion } from 'framer-motion';
import svgPaths from '../imports/svg-q28tvzb5n9';

interface LoginProps {
  onLogin: () => void;
  onCadastro: () => void;
}

export function Login({ onLogin, onCadastro }: LoginProps) {
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="bg-black relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(rgba(255, 255, 255, 0.03) 0.12346%, rgba(0, 0, 0, 0) 0.12346%)" 
        }} 
      />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Section */}
        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-10 text-xs left-[5%] top-[8%]"
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'import { useState, useEffect } from "react";'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-8 text-[10px] right-[8%] top-[12%]"
          animate={{ 
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'interface User { id: number; name: string; }'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-12 text-xs left-[15%] top-[5%]"
          animate={{ 
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'const handleSubmit = async () => {'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-10 text-[11px] right-[20%] top-[6%]"
          animate={{ 
            opacity: [0.1, 0.14, 0.1],
          }}
          transition={{ 
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'export default function App() {'}
        </motion.div>

        {/* Left Side */}
        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-12 text-xs left-[3%] top-[20%]"
          animate={{ 
            opacity: [0.12, 0.16, 0.12],
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'const [data, setData] = useState([]);'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-10 text-[10px] left-[8%] top-[35%]"
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'  try { await authenticate(); }'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-12 text-xs left-[5%] top-[50%]"
          animate={{ 
            opacity: [0.12, 0.17, 0.12],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'useEffect(() => { fetchData(); }, []);'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-10 text-[11px] left-[4%] top-[65%]"
          animate={{ 
            opacity: [0.1, 0.14, 0.1],
          }}
          transition={{ 
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'const isValid = validate(input);'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-12 text-xs left-[6%] top-[80%]"
          animate={{ 
            opacity: [0.12, 0.16, 0.12],
          }}
          transition={{ 
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'  catch (err) { console.log(err); }'}
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-10 text-xs right-[5%] top-[25%]"
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'if (authenticated) { navigate("/dashboard"); }'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-12 text-[10px] right-[3%] top-[40%]"
          animate={{ 
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{ 
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'  catch (err) { console.log(err); }'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-10 text-xs right-[7%] top-[55%]"
          animate={{ 
            opacity: [0.1, 0.14, 0.1],
          }}
          transition={{ 
            duration: 4.7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'type AuthResponse = { token: string; }'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-12 text-[11px] right-[4%] top-[70%]"
          animate={{ 
            opacity: [0.12, 0.17, 0.12],
          }}
          transition={{ 
            duration: 5.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'const token = localStorage.getItem("token");'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-10 text-xs right-[6%] top-[85%]"
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'await api.post("/auth/login", credentials);'}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-12 text-xs left-[20%] bottom-[8%]"
          animate={{ 
            opacity: [0.12, 0.16, 0.12],
          }}
          transition={{ 
            duration: 5.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'return <Dashboard user={currentUser} />;'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-10 text-[10px] left-[45%] bottom-[5%]"
          animate={{ 
            opacity: [0.1, 0.14, 0.1],
          }}
          transition={{ 
            duration: 4.9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'const navigate = useNavigate();'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-12 text-xs right-[25%] bottom-[10%]"
          animate={{ 
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{ 
            duration: 5.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'setLoading(false); setStatus(null);'}
        </motion.div>

        {/* Center Area - Behind Card */}
        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-8 text-[10px] left-[12%] top-[45%]"
          animate={{ 
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'// Authenticate user credentials'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-8 text-[10px] right-[15%] top-[48%]"
          animate={{ 
            opacity: [0.08, 0.11, 0.08],
          }}
          transition={{ 
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {'// Validate form inputs'}
        </motion.div>

        {/* Additional Static Code Elements - More Dense */}
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-10 text-[10px] left-[10%] top-[17%]" animate={{ opacity: [0.1, 0.14, 0.1] }} transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}>
          {'const dispatch = useDispatch();'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-12 text-xs right-[12%] top-[22%]" animate={{ opacity: [0.12, 0.16, 0.12] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}>
          {'await fetchUserData();'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-10 text-[10px] left-[20%] top-[28%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}>
          {'import axios from "axios";'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-12 text-xs right-[22%] top-[33%]" animate={{ opacity: [0.12, 0.17, 0.12] }} transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}>
          {'const router = useRouter();'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-10 text-[11px] left-[28%] top-[38%]" animate={{ opacity: [0.1, 0.14, 0.1] }} transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut" }}>
          {'setLoading(true);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-12 text-xs right-[28%] top-[42%]" animate={{ opacity: [0.12, 0.16, 0.12] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}>
          {'type Props = { children: ReactNode; }'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-10 text-[10px] left-[16%] top-[56%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
          {'const token = getToken();'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-12 text-xs right-[18%] top-[60%]" animate={{ opacity: [0.12, 0.17, 0.12] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
          {'if (!user) return null;'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-10 text-[11px] left-[24%] top-[64%]" animate={{ opacity: [0.1, 0.14, 0.1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          {'const { data, isLoading } = useQuery();'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-12 text-xs right-[24%] top-[68%]" animate={{ opacity: [0.12, 0.16, 0.12] }} transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}>
          {'await new Promise(resolve => {'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-10 text-[10px] left-[14%] top-[74%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut" }}>
          {'headers: { Authorization: `Bearer ${token}` }'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-12 text-xs right-[16%] top-[78%]" animate={{ opacity: [0.12, 0.17, 0.12] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          {'return { success: true };'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-10 text-[11px] left-[32%] top-[18%]" animate={{ opacity: [0.1, 0.14, 0.1] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}>
          {'import { toast } from "sonner";'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-12 text-xs right-[34%] top-[15%]" animate={{ opacity: [0.12, 0.16, 0.12] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}>
          {'const [isOpen, setIsOpen] = useState(false);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-10 text-[10px] left-[38%] top-[24%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}>
          {'className="flex items-center"'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-12 text-xs right-[38%] top-[28%]" animate={{ opacity: [0.12, 0.17, 0.12] }} transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}>
          {'const handleChange = (e) => setForm(e.target.value);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-10 text-[11px] left-[42%] top-[36%]" animate={{ opacity: [0.1, 0.14, 0.1] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}>
          {'async function verifyToken() {'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-12 text-xs right-[42%] top-[52%]" animate={{ opacity: [0.12, 0.16, 0.12] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
          {'const config = { headers: headers };'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-10 text-[10px] left-[36%] top-[62%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}>
          {'export const apiUrl = process.env.API_URL;'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-12 text-xs right-[36%] top-[74%]" animate={{ opacity: [0.12, 0.17, 0.12] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}>
          {'const result = await mutation.mutateAsync(data);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-10 text-[11px] left-[26%] top-[82%]" animate={{ opacity: [0.1, 0.14, 0.1] }} transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut" }}>
          {'interface LoginData { email: string; password: string; }'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-12 text-xs right-[26%] top-[86%]" animate={{ opacity: [0.12, 0.16, 0.12] }} transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}>
          {'import { z } from "zod";'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-10 text-[10px] left-[8%] top-[92%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
          {'const schema = z.object({ email: z.string() });'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-12 text-xs right-[10%] top-[94%]" animate={{ opacity: [0.12, 0.17, 0.12] }} transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}>
          {'onClick={() => handleClick()}'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-10 text-[11px] left-[48%] top-[26%]" animate={{ opacity: [0.1, 0.14, 0.1] }} transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut" }}>
          {'useCallback(() => { validate(); }, [form]);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-12 text-xs right-[48%] top-[54%]" animate={{ opacity: [0.12, 0.16, 0.12] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          {'import { motion } from "framer-motion";'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-10 text-[10px] left-[12%] top-[12%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut" }}>
          {'// Initialize authentication'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-12 text-xs right-[14%] top-[88%]" animate={{ opacity: [0.12, 0.17, 0.12] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
          {'// Handle errors gracefully'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-10 text-[11px] left-[18%] top-[86%]" animate={{ opacity: [0.1, 0.14, 0.1] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}>
          {'setError(null);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-12 text-xs right-[20%] top-[12%]" animate={{ opacity: [0.12, 0.16, 0.12] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}>
          {'// Secure API endpoint'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-10 text-[10px] left-[44%] top-[14%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}>
          {'// Handle session timeout'}
        </motion.div>

        {/* More Floating Symbols */}
        <motion.div className="absolute font-mono text-[#2563EB] opacity-9 text-xl left-[60%] top-[42%]" animate={{ rotate: [0, -360], scale: [1, 1.12, 1] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
          {'< >'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-8 text-lg left-[15%] top-[38%]" animate={{ rotate: [360, 0], scale: [1, 1.08, 1] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
          {'</>'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-9 text-xl right-[18%] top-[65%]" animate={{ rotate: [0, 360], scale: [1, 1.13, 1] }} transition={{ duration: 21, repeat: Infinity, ease: "linear" }}>
          {'() =>'}
        </motion.div>

        {/* Floating Animated Lines */}
        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-20 text-sm"
          initial={{ x: -200, y: 100 }}
          animate={{ 
            x: ['10%', '90%'],
            y: ['10%', '15%']
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'const authenticate = async (credentials) => {'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-15 text-xs"
          initial={{ x: '100%', y: '20%' }}
          animate={{ 
            x: ['-20%'],
            y: ['20%', '25%']
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'  return await api.post("/login", credentials);'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-20 text-sm"
          initial={{ x: '50%', y: '80%' }}
          animate={{ 
            x: ['50%', '-10%'],
            y: ['80%', '75%']
          }}
          transition={{ 
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'interface LoginProps {'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-15 text-xs"
          initial={{ x: '-10%', y: '40%' }}
          animate={{ 
            x: ['100%'],
            y: ['40%', '45%']
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'  email: string; password: string; }'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-20 text-sm"
          initial={{ x: '80%', y: '60%' }}
          animate={{ 
            x: ['-20%'],
            y: ['60%', '55%']
          }}
          transition={{ 
            duration: 32,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'export default function Dashboard() {'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-15 text-xs"
          initial={{ x: '20%', y: '90%' }}
          animate={{ 
            x: ['20%', '95%'],
            y: ['90%', '85%']
          }}
          transition={{ 
            duration: 27,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'const [isLoading, setIsLoading] = useState(false);'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-20 text-sm"
          initial={{ x: '100%', y: '5%' }}
          animate={{ 
            x: ['-30%'],
            y: ['5%', '10%']
          }}
          transition={{ 
            duration: 33,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'  useEffect(() => { validateSession(); }, []);'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-15 text-xs"
          initial={{ x: '-20%', y: '70%' }}
          animate={{ 
            x: ['110%'],
            y: ['70%', '65%']
          }}
          transition={{ 
            duration: 29,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'try { await handleLogin(data); } catch (e) {}'}
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-18 text-sm"
          initial={{ x: '10%', y: '30%' }}
          animate={{ 
            x: ['10%', '85%'],
            y: ['30%', '35%']
          }}
          transition={{ 
            duration: 26,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'const response = await fetch("/api/auth");'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-16 text-xs"
          initial={{ x: '90%', y: '15%' }}
          animate={{ 
            x: ['-15%'],
            y: ['15%', '20%']
          }}
          transition={{ 
            duration: 31,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'import { useRouter } from "next/router";'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-18 text-sm"
          initial={{ x: '-5%', y: '55%' }}
          animate={{ 
            x: ['95%'],
            y: ['55%', '60%']
          }}
          transition={{ 
            duration: 34,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'const handleChange = (e: ChangeEvent) => {'}
        </motion.div>

        <motion.div className="absolute font-mono text-[#60A5FA] opacity-17 text-sm" initial={{ x: '40%', y: '12%' }} animate={{ x: ['40%', '-15%'], y: ['12%', '18%'] }} transition={{ duration: 36, repeat: Infinity, ease: "linear" }}>
          {'const { mutate } = useMutation(loginFn);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-16 text-xs" initial={{ x: '-10%', y: '82%' }} animate={{ x: ['105%'], y: ['82%', '78%'] }} transition={{ duration: 27, repeat: Infinity, ease: "linear" }}>
          {'await axios.get("/api/user", config);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-19 text-sm" initial={{ x: '85%', y: '48%' }} animate={{ x: ['-12%'], y: ['48%', '52%'] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {'if (status) { toast.success(status.message); }'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-17 text-xs" initial={{ x: '15%', y: '95%' }} animate={{ x: ['15%', '88%'], y: ['95%', '92%'] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
          {'const formData = new FormData(form.current);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-18 text-sm" initial={{ x: '95%', y: '35%' }} animate={{ x: ['-18%'], y: ['35%', '38%'] }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }}>
          {'const validated = await schema.parseAsync(input);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-16 text-xs" initial={{ x: '-8%', y: '25%' }} animate={{ x: ['102%'], y: ['25%', '28%'] }} transition={{ duration: 33, repeat: Infinity, ease: "linear" }}>
          {'return { props: { user, session } };'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-19 text-sm" initial={{ x: '60%', y: '8%' }} animate={{ x: ['60%', '-20%'], y: ['8%', '12%'] }} transition={{ duration: 29, repeat: Infinity, ease: "linear" }}>
          {'useContext(AuthContext);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-17 text-xs" initial={{ x: '25%', y: '92%' }} animate={{ x: ['25%', '-12%'], y: ['92%', '88%'] }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
          {'const isAuthenticated = checkAuth();'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-18 text-sm" initial={{ x: '-12%', y: '18%' }} animate={{ x: ['98%'], y: ['18%', '22%'] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
          {'export async function getServerSideProps() {'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-16 text-xs" initial={{ x: '78%', y: '88%' }} animate={{ x: ['78%', '2%'], y: ['88%', '84%'] }} transition={{ duration: 31, repeat: Infinity, ease: "linear" }}>
          {'import type { NextPage } from "next";'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-19 text-sm" initial={{ x: '5%', y: '68%' }} animate={{ x: ['5%', '92%'], y: ['68%', '72%'] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
          {'const [user, setUser] = useState<User | null>(null);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-17 text-xs" initial={{ x: '92%', y: '42%' }} animate={{ x: ['-8%'], y: ['42%', '46%'] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}>
          {'headers.append("Content-Type", "application/json");'}
        </motion.div>

        {/* Floating Brackets and Symbols */}
        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-10 text-2xl"
          initial={{ x: '30%', y: '30%' }}
          animate={{ 
            x: ['30%', '70%'],
            y: ['30%', '35%'],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'{ }'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-10 text-xl"
          initial={{ x: '70%', y: '50%' }}
          animate={{ 
            x: ['70%', '10%'],
            y: ['50%', '55%'],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 38,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'=> { }'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-8 text-xl left-[25%] top-[60%]"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'[ ]'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-8 text-lg right-[30%] top-[25%]"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {'( )'}
        </motion.div>

        {/* Semicolons */}
        <motion.div
          className="absolute font-mono text-[#3B82F6] opacity-10 text-3xl"
          initial={{ x: '10%', y: '25%' }}
          animate={{ 
            x: ['10%', '90%'],
            y: ['25%', '20%']
          }}
          transition={{ 
            duration: 24,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {';'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-10 text-2xl"
          initial={{ x: '90%', y: '75%' }}
          animate={{ 
            x: ['90%', '5%'],
            y: ['75%', '80%']
          }}
          transition={{ 
            duration: 26,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {';'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#2563EB] opacity-8 text-2xl left-[40%] top-[15%]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {';'}
        </motion.div>

        <motion.div
          className="absolute font-mono text-[#60A5FA] opacity-8 text-xl right-[45%] bottom-[20%]"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.13, 0.08]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {';'}
        </motion.div>

        <motion.div className="absolute font-mono text-[#3B82F6] opacity-9 text-2xl" initial={{ x: '55%', y: '65%' }} animate={{ x: ['55%', '-5%'], y: ['65%', '68%'] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          {';'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-10 text-xl" initial={{ x: '-5%', y: '50%' }} animate={{ x: ['95%'], y: ['50%', '47%'] }} transition={{ duration: 27, repeat: Infinity, ease: "linear" }}>
          {';'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-9 text-3xl" initial={{ x: '72%', y: '18%' }} animate={{ x: ['72%', '8%'], y: ['18%', '22%'] }} transition={{ duration: 23, repeat: Infinity, ease: "linear" }}>
          {';'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-8 text-2xl left-[12%] top-[72%]" animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.14, 0.08] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
          {';'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#2563EB] opacity-9 text-xl right-[52%] top-[32%]" animate={{ scale: [1, 1.14, 1], opacity: [0.09, 0.13, 0.09] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}>
          {';'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-8 text-2xl left-[58%] bottom-[28%]" animate={{ scale: [1, 1.16, 1], opacity: [0.08, 0.12, 0.08] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}>
          {';'}
        </motion.div>
      </div>
      
      {/* Blur Effects */}
      <motion.div 
        className="absolute bg-[rgba(127,34,254,0.3)] blur-[120px] filter left-[25%] opacity-[0.507] rounded-full w-[384px] h-[384px] top-[25%]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.507, 0.6, 0.507],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bg-[rgba(0,146,184,0.3)] blur-[120px] filter left-[48%] opacity-[0.949] rounded-full w-[384px] h-[384px] top-[28%]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.949, 0.7, 0.949],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main Container */}
      <motion.div 
        className="relative z-10 flex flex-col gap-[20px] items-center w-[448px] max-h-[95vh] py-[20px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Card */}
        <motion.div 
          className="bg-[rgba(15,23,42,0.85)] backdrop-blur-xl relative rounded-[24px] w-full border-[0.909px] border-[rgba(255,255,255,0.15)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] p-[24px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center justify-center mb-[32px] mt-[8px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-[209px] h-[48px]">
              {/* Icon Container */}
              <div className="absolute left-0 top-0 w-[48px] h-[48px]">
                <div className="absolute left-[0.74px] top-[0.75px] w-[46.52px] h-[46.477px]">
                  <div className="relative w-full h-full overflow-clip">
                    <div className="absolute inset-[2.66%_3.73%_3.73%_2.66%]">
                      <div className="absolute inset-[-2.84%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 46">
                          <path d={svgPaths.p39be6600} stroke="url(#paint0_linear_logo)" strokeWidth="2.47318" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo" x1="-0.742868" x2="46.7205" y1="-0.741056" y2="46.7658">
                              <stop stopColor="#3B82F6" />
                              <stop offset="1" stopColor="#2563EB" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[14.74px] top-[10.74px] w-[22.514px] h-[26.506px]">
                  <div className="relative w-full h-full overflow-clip">
                    <div className="absolute inset-[4.63%_7.61%_6.49%_5.43%]">
                      <div className="absolute inset-[-5.2%_-6.26%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
                          <path d={svgPaths.p26e72d80} stroke="url(#paint0_linear_icon)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.45056" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_icon" x1="1.22528" x2="20.8681" y1="1.22528" y2="24.729">
                              <stop stopColor="#2563EB" />
                              <stop offset="1" stopColor="#1D4ED8" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Lines */}
                <div className="absolute left-[18px] top-[18.99px] w-[10.994px] h-[2.003px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
                    <path d="M1.00039 1.00039H9.99573" stroke="url(#paint0_linear_line1)" strokeLinecap="round" strokeWidth="2.00078" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_line1">
                        <stop stopColor="#60A5FA" />
                        <stop offset="1" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute left-[18px] top-[23px] w-[10.994px] h-[1.989px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
                    <path d="M0.996839 0.996839H9.99218" stroke="url(#paint0_linear_line2)" strokeLinecap="round" strokeWidth="1.99368" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_line2">
                        <stop stopColor="#60A5FA" />
                        <stop offset="1" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute left-[18px] top-[26.99px] w-[10.994px] h-[2.003px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
                    <path d="M1.00039 1.00039H9.99573" stroke="url(#paint0_linear_line3)" strokeLinecap="round" strokeWidth="2.00078" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_line3">
                        <stop stopColor="#60A5FA" />
                        <stop offset="1" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Text */}
              <div className="absolute left-[60px] top-0">
                <div className="mb-[4px]">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] text-[24px] text-nowrap text-white tracking-[-0.6px] whitespace-pre">Digita Corban</p>
                </div>
                <div>
                  <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] text-[11px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[0.3px] whitespace-pre">SOLUÇÕES INTELIGENTES</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-[18px]">
            {/* Campo Empresa */}
            <motion.div 
              className="flex flex-col gap-[6px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
              <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                Empresa
              </label>
              <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)]">
                <input
                  type="text"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  placeholder="Nome da empresa"
                  className="w-full h-[48px] px-[16px] py-[12px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                  required
                />
              </div>
            </motion.div>

            {/* Campo E-mail */}
            <motion.div 
              className="flex flex-col gap-[6px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            >
              <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                E-mail
              </label>
              <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full h-[48px] px-[16px] py-[12px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                  required
                />
              </div>
            </motion.div>

            {/* Campo Senha */}
            <motion.div 
              className="flex flex-col gap-[6px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
              <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                Senha
              </label>
              <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)] relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-[48px] px-[16px] py-[12px] pr-[48px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] flex items-center justify-center"
                >
                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.pcb0000} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p2314a170} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Botão Acessar */}
            <motion.button
              type="submit"
              className="w-full h-[48px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(37,99,235,0.25),0px_4px_6px_-4px_rgba(37,99,235,0.25)] font-['Arimo:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-center text-white hover:from-[#1d4ed8] hover:to-[#2563EB] transition-all mt-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Acessar
            </motion.button>

            {/* Texto Novo por aqui? */}
            <motion.p 
              className="text-center font-['Arimo:Regular',sans-serif] font-normal text-[14px] text-[#6a7282] mt-[16px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
            >
              Novo por aqui?
            </motion.p>

            {/* Botão Cadastre-se */}
            <motion.button
              type="button"
              className="w-full h-[48px] border-[0.909px] border-[rgba(255,255,255,0.2)] rounded-[14px] font-['Arimo:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-center text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors mt-[12px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCadastro}
            >
              Cadastre-se
            </motion.button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.p 
          className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-center text-[#6a7282]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        >
          © 2025 Digita Corban. Todos os direitos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
}