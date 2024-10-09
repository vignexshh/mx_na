"use client";
import Sidebar from '@/components/ui/Sidebar';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  const router = useRouter(); 
  const currentPath = typeof window !== "undefined" ? window.location.pathname : '';
  const pageName = currentPath.split('/').pop();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem' }}>
      <div>
        <Sidebar />
      </div> 
      <div style={{ marginLeft: '4rem', width: '500px' }}> 
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <h1>{pageName}</h1>
          <ScrollArea>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '1rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 1</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 2</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 3</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 4</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 5</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 6</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 7</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 8</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 9</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 10</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 11</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Input Field 12</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Your input field here */}
                </CardContent>
              </Card>
              {/* Add more cards as needed */}
            </div>
            <ScrollBar />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default HomePage;