const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 rounded-lg bg-card/65 backdrop-blur-sm border border-border">
      {children}
    </div>
  );
};

export default Card;
