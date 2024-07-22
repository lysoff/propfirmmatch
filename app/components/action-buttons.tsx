"use client";

import ActionButton from "@/components/ActionButton";

const ActionButtons = () => {
  return (
    <div className="flex flex-row items-center gap-2 mr-4">
      <ActionButton onClick={() => {}}>Sync Open Trades</ActionButton>
      <ActionButton onClick={() => {}}>Close Profits</ActionButton>
      <ActionButton type="red" onClick={() => {}}>
        Close Losses
      </ActionButton>
      <ActionButton type="red" onClick={() => {}}>
        Close All
      </ActionButton>
    </div>
  );
};

export default ActionButtons;
