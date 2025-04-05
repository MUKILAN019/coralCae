import React, { useState, useEffect } from "react";
import CoralChart from "../../components/CoralChart/CoralChart";
import css from "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <motion.div 
        className={css.loadingSpinner}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="dashboard-main-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Coral Reef Ecosystem Dashboard
        </motion.h1>
        <CoralChart />
      </motion.div>
    </div>
  );
};

export default Dashboard;
