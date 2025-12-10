import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import clsx from 'clsx';
import { useState } from 'react';

export default function Faqs({ item }) {
  const [open, setOpen] = useState(false)
  
  const handleToggle = (e) => {
    setOpen(e.currentTarget.open);
  }
  
  return (
    <details open={open} onToggle={handleToggle}>
      <summary>{item.question} <ArrowForwardIosIcon className={clsx(open ? 'rotate-270' : 'rotate-90')} /></summary>
      <p>
        {item.answer}
      </p>
    </details>
  );
}
