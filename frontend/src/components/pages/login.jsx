import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../../features/api/authApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();

  const navigate = useNavigate();

  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput((prev) => ({ ...prev, [name]: value }));
    } else {
      setLoginInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
  };


  useEffect(() => {
    if(registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup.")
    }

    if(registerError) {
  toast.error(registerError.data?.message || "Signup Failed");
}
    if(loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful.");
      navigate("/");
    }
    if(loginError) {
      toast.error(loginData.data.message || "Login  Failed");
    }
    
  }, [

    loginIsLoading,
    registerIsLoading,
    loginData,
    registerData,
    loginError,
    registerError
  ]);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    handleRegistration("signup");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleRegistration("login");
  };

  return (
    <div className="flex items-center w-full justify-center min-h-screen">
      <Tabs defaultValue="sign-up" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-up">Sign up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        {/* Sign Up Tab */}
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>
                Create a new account and click signup when you are done.
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSignupSubmit}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={signupInput.name}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={signupInput.email}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={signupInput.password}
                    onChange={(e) => changeInputHandler(e, "signup")}
                    required
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button
                 
                  disabled={registerIsLoading}
                  className="bg-black text-white w-full"
                >
                  {registerIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Signup"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* Login Tab */}
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                If you have an account, please login with your credentials.
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleLoginSubmit}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    type="email"
                    id="login-email"
                    name="email"
                    value={loginInput.email}
                    onChange={(e) => changeInputHandler(e, "login")}
                    required
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    type="password"
                    id="login-password"
                    name="password"
                    value={loginInput.password}
                    onChange={(e) => changeInputHandler(e, "login")}
                    required
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button
                 
                  disabled={loginIsLoading}
                  className="bg-black text-white w-full"
                >
                  {loginIsLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
