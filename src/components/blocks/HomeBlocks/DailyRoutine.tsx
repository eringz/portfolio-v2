import { motion } from "framer-motion";

const DailyRoutine = () => {
  const codeLines = [
    { label: "Wake Up", status: "DONE", color: "#4ade80" },
    { label: "Work", status: "CONVERTING_COFFEE", color: "#4ade80" },
    { label: "Code", status: "SLICING_FEATURES", color: "#4ade80" },
    { label: "Eat", status: "PROCESSING", color: "#4ade80" },
    { label: "Sleep?", status: "404_NOT_FOUND", color: "#ff4444" },
  ];

  return (
    <div className="" style={{ backgroundColor: "#1a1a1a", padding: "2rem", borderRadius: "8px", fontFamily: "monospace" }}>
      <div style={{ marginBottom: "1rem", color: "#4ade80", fontSize: "0.8rem" }}>
        // STATUS: <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>●</motion.span> RUNNING_LIFE_CYCLE
      </div>

      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.5 }}
          style={{ marginBottom: "0.5rem", display: "flex", gap: "10px" }}
        >
          <span style={{ color: "#888" }}>0{index + 1}</span>
          <span style={{ color: "#fff" }}>{line.label}</span>
          <span style={{ color: "#444" }}>{`>>>`}</span>
          <span style={{ color: line.color, fontWeight: "bold" }}>{line.status}</span>
        </motion.div>
      ))}

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ marginTop: "1.5rem", color: "#666", fontStyle: "italic", fontSize: "0.9rem" }}
      >
        // Repeat until successful...
      </motion.div>
    </div>
  );
};

export default DailyRoutine;