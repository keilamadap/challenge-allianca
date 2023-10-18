import { Icon } from "@iconify/react";

const styles = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  alignItems: "center",
  gap: "5px",
  padding: "10px",
  flexDirection: "column",
  fontSize: "15px",
  fontWeight: "600",
};

const EmptyTasks = () => {
  return (
    <div style={styles}>
      <Icon icon="solar:moon-sleep-bold" width="30" height="30" />
      Sem tarefas no momento...
    </div>
  );
};

export default EmptyTasks;
