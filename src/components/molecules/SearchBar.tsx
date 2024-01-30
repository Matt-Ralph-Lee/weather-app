"use client";

import Icon from "../atom/icon/Icon";
import SearchIcon from "../../../public/search.svg";
import { Dispatch, SetStateAction } from "react";

type Props = {
  cityName: string;
  setCityName: Dispatch<SetStateAction<string>>;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function SearchBar({
  cityName,
  setCityName,
  handleSearch,
}: Props) {
  return (
    <form
      className="flex w-4/5 max-w-2xl h-12 px-4 bg-slate-50 rounded-full"
      onSubmit={handleSearch}
    >
      <Icon src={SearchIcon} alt="Search Icon" width={20} height={20} />
      <input
        className="w-11/12 ml-2 bg-inherit text-xl text-baseBlack focus:outline-none"
        type="text"
        placeholder="Ciry Name"
        required
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
    </form>
  );
}
