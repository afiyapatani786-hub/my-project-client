import { ThemeToggle as ThemeToggleComponent } from '../ThemeToggle';
import { ThemeProvider } from '../ThemeProvider';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-8 flex items-center justify-center">
        <ThemeToggleComponent />
      </div>
    </ThemeProvider>
  );
}
