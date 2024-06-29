import { ReactComponent as HappyCustomersIcon } from "../lib/icons/HappyCustomers.svg";
import { ReactComponent as FinishedProjectsIcon } from "../lib/icons/FinishedProjects.svg";
import { ReactComponent as CoffeeCupIcon } from "../lib/icons/CoffeeCup.svg";
import { ReactComponent as WorkingHoursIcon } from "../lib/icons/WorkingHours.svg";

export const funFacts = [
  {
    factIcon: <HappyCustomersIcon className="w-[3.125rem] fill-accent"></HappyCustomersIcon>,
    factCount: "35000",
    factCap: "Happy Customers",
  },
  {
    factIcon: <FinishedProjectsIcon className="w-[3.125rem] fill-accent"></FinishedProjectsIcon>,
    factCount: "15250",
    factCap: "Finished Projects",
  },
  {
    factIcon: <CoffeeCupIcon className="w-[3.125rem] fill-accent"></CoffeeCupIcon>,
    factCount: "927",
    factCap: "Coffee Cups",
  },
  {
    factIcon: <WorkingHoursIcon className="w-[3.125rem] fill-accent"></WorkingHoursIcon>,
    factCount: "52300",
    factCap: "Working Hours",
  },
];
