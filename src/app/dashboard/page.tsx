"use client";
import Sidebar from '@/components/ui/Sidebar';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SelectDropdown from '@/components/ui/SelectDropdown';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const timeZoneGroups = [
  {
    label: "Asia",
    items: [
      { value: "ist", label: "India Standard Time (IST)" },
      { value: "cst_china", label: "China Standard Time (CST)" },
      { value: "jst", label: "Japan Standard Time (JST)" },
      { value: "kst", label: "Korea Standard Time (KST)" },
      { value: "ist_indonesia", label: "Indonesia Central Standard Time (WITA)" },
    ],
  },
  {
    label: "Australia & Pacific",
    items: [
      { value: "awst", label: "Australian Western Standard Time (AWST)" },
      { value: "acst", label: "Australian Central Standard Time (ACST)" },
      { value: "aest", label: "Australian Eastern Standard Time (AEST)" },
      { value: "nzst", label: "New Zealand Standard Time (NZST)" },
      { value: "fjt", label: "Fiji Time (FJT)" },
    ],
  },
  {
    label: "South America",
    items: [
      { value: "art", label: "Argentina Time (ART)" },
      { value: "bot", label: "Bolivia Time (BOT)" },
      { value: "brt", label: "Brasilia Time (BRT)" },
      { value: "clt", label: "Chile Standard Time (CLT)" },
    ],
  },
];

const timeZoneGroups2 = [
  {
    label: "Asia",
    items: [
      { value: "ist", label: "India Standard Time (IST)" },
      { value: "cst_china", label: "China Standard Time (CST)" },
      { value: "jst", label: "Japan Standard Time (JST)" },
      { value: "kst", label: "Korea Standard Time (KST)" },
      { value: "ist_indonesia", label: "Indonesia Central Standard Time (WITA)" },
    ],
  },
  {
    label: "Australia & Pacific",
    items: [
      { value: "awst", label: "Australian Western Standard Time (AWST)" },
      { value: "acst", label: "Australian Central Standard Time (ACST)" },
      { value: "aest", label: "Australian Eastern Standard Time (AEST)" },
      { value: "nzst", label: "New Zealand Standard Time (NZST)" },
      { value: "fjt", label: "Fiji Time (FJT)" },
    ],
  },
  {
    label: "South America",
    items: [
      { value: "art", label: "Argentina Time (ART)" },
      { value: "bot", label: "Bolivia Time (BOT)" },
      { value: "brt", label: "Brasilia Time (BRT)" },
      { value: "clt", label: "Chile Standard Time (CLT)" },
    ],
  },
];
const HomePage = () => {
  const router = useRouter(); 
  const currentPath = typeof window !== "undefined" ? window.location.pathname : '';
  const pageName = currentPath.split('/').pop();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem' }}>
      
      <div>
        <Sidebar />
      </div> 
      <div className="md:ml-16 sm:ml-0 " > 
        <div className='pl-5 lg:w-[350px] sm:w-full md:w-full' >
      <div className='border' >
        <h1 className='text-xl'> Welcome to {pageName} </h1> 
        </div>
      
        <div style={{  display: 'flex', flexDirection: 'column', gap: '1rem', }}>
          
        
          <ScrollArea className="h-[500px]  rounded-md border p-4">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem' }}>
            <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{display: 'flex', flexDirection: 'column', gap:'0.5rem'}}> 
                <SelectDropdown groups={timeZoneGroups} />
                <SelectDropdown groups={timeZoneGroups2} />
                <SelectDropdown groups={timeZoneGroups} />
                </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{display: 'flex', flexDirection: 'column', gap:'0.5rem'}}> 
                <SelectDropdown groups={timeZoneGroups} />
                <SelectDropdown groups={timeZoneGroups2} />
                <SelectDropdown groups={timeZoneGroups} />
                </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{display: 'flex', flexDirection: 'column', gap:'0.5rem'}}> 
                <SelectDropdown groups={timeZoneGroups} />
                <SelectDropdown groups={timeZoneGroups2} />
                <SelectDropdown groups={timeZoneGroups} />
                </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  <div style={{display: 'flex', flexDirection: 'column', gap:'0.5rem'}}> 
                <SelectDropdown groups={timeZoneGroups} />
                <SelectDropdown groups={timeZoneGroups2} />
                <SelectDropdown groups={timeZoneGroups} />
                </div>
                </CardContent>
              </Card>
              {/* Add more cards as needed */}
            </div>
            <ScrollBar />
          </ScrollArea>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;