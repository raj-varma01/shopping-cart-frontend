interface EmptyStateProps {
    message: string;
  }
  
  function EmptyState({ message }: EmptyStateProps) {
    return (
      <div className="py-10 text-center text-gray-500">
        {message}
      </div>
    );
  }
  
  export default EmptyState;