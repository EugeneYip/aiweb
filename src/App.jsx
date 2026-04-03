import { useState } from "react";
import { Sparkles, Rocket, FileCode, Globe, ArrowRight } from "lucide-react";

export default function App() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Generate",
      desc: "Create your page with any AI — Claude, ChatGPT, or others",
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: "Replace",
      desc: "Paste the JSX output into src/App.jsx",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Push",
      desc: "Commit and push — GitHub Actions handles the rest",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Live",
      desc: "Your page is published on GitHub Pages",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI Page Publisher
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Publish AI pages
            <br />
            <span className="text-indigo-600">in seconds</span>
          </h1>
          <p className="text-slate-500 text-lg">
            Replace this file with your AI-generated JSX and push.
            <br />
            That's it.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-default ${
                hoveredStep === i
                  ? "bg-indigo-50 border-indigo-200 shadow-sm"
                  : "bg-white border-slate-200"
              }`}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div
                className={`p-2 rounded-lg ${
                  hoveredStep === i
                    ? "bg-indigo-100 text-indigo-600"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {step.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
              <ArrowRight
                className={`w-4 h-4 transition-colors ${
                  hoveredStep === i ? "text-indigo-400" : "text-slate-300"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <code className="bg-slate-800 text-emerald-400 px-4 py-2 rounded-lg text-sm font-mono">
            src/App.jsx ← your AI artifact goes here
          </code>
        </div>
      </div>
    </div>
  );
}
