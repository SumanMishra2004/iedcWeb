import { ArrowBigDownDash, ChartNoAxesCombined, House, LayoutDashboard, LogIn, LogOut, PanelLeftClose, PenTool, Rss, Settings, Signature, User, UsersRound } from "lucide-react";

export  const SidebarElements = [
    {
      name: "Home",
      icon1: <House />,
      link: "/",
      activation:"active"
    },
    // {
    //   name: "Profile",
    //   icon1: <User />,
    //   icon2: <ArrowBigDownDash />,
    //   type: "dropdown",
    //   activation:"disactive",
    //   children: [
    //     { subName: "Profile", subIcon: <UsersRound />, link: "/profile" },
    //     { subName: "Dashboard", subIcon: <LayoutDashboard />, link: "/profile/dashboard" },
    //     { subName: "Settings", subIcon: <Settings />, link: "/profile/settings" },
    //     { subName: "Analysis", subIcon: <ChartNoAxesCombined />, link: "/profile/analysis" },
    //   ],
    // },
    // { name: "Blog", icon1: <Rss />, link: "/blog",activation:"disactive", },
    // {
    //   name: "Patent",
    //   icon1: <PenTool />,
    //   icon2: <ArrowBigDownDash />,
    //   type: "dropdown",
    //   activation:"disactive",
    //   children: [
    //     { subName: "Patent", subIcon: <PanelLeftClose />, link: "/patent" },
    //     { subName: "Something", subIcon: <PanelLeftClose />, link: "/patent/something" },
    //     { subName: "Something", subIcon: <PanelLeftClose />, link: "/patent/something2" },
    //   ],
    // },
    // {
    //   name: "Auth",
    //   icon1: <Signature />,
    //   icon2: <ArrowBigDownDash />,
    //   type: "dropdown",
    //   activation:"disactive",
    //   children: [
    //     { subName: "Login", subIcon:<LogIn />, link: "/login" },
    //     { subName: "Logout", subIcon: <LogOut />, link: "/logout" },
    //   ],
    // },
    {
      name: "compitions",
      icon1: <Signature />,
      icon2: <ArrowBigDownDash />,
      type: "dropdown",
      activation:"active",
      children: [
        { subName: "Tech Kurukshetra", subIcon:<LogIn />, link: "/compitition/techkurukshetra" },

      ],
    },
    
  ];