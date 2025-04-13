"use client";

import { Button } from "@/components/ui/button";
import { Trash, Loader2 } from "lucide-react";
import React, { useState } from "react";

const Delete = ({ onDelete }: { onDelete: () => Promise<void> }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await onDelete();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={"destructive"}
      type="button"
      onClick={handleDelete}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="animate-spin w-4 h-4" />
      ) : (
        <Trash className="w-4 h-4" />
      )}
    </Button>
  );
};

export default Delete;
