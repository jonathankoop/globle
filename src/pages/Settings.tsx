import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LocaleContext } from "../i18n/LocaleContext";
import LanguagePicker from "../components/LanguagePicker";
import localeList from "../i18n/messages";
import { FormattedMessage } from "react-intl";
import Toggle from "../components/Toggle";

export default function Settings() {
  const themeContext = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  
  // Load the seed from localStorage or default to "1234"
  const [seed, setSeed] = useState(localStorage.getItem("globleSeed") || "1234");

  // Update localStorage whenever the seed changes
  useEffect(() => {
    localStorage.setItem("globleSeed", seed);
  }, [seed]);

  return (
    <div className="flex-col items-center space-y-8 mx-auto my-10 w-fit max-w-md">
      <LanguagePicker />

      {/* Seed Input */}
      <div className="flex flex-col">
        <label className="text-lg font-medium">
          <FormattedMessage id="SettingsSeed" defaultMessage="Game Seed" />
        </label>
        <input
          type="number"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
      </div>
    </div>
  );
}
