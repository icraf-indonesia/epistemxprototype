"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { 
  Map, 
  Settings, 
  Image, 
  LineChart,
  Layers,
  Download,
  RefreshCw
} from 'lucide-react';

const RemoteSensingUI = () => {
  const [activeTab, setActiveTab] = useState('map');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [startYear, setStartYear] = useState(2018);
  const [endYear, setEndYear] = useState(2024);
  const [cloudCover, setCloudCover] = useState(20);
  const [selectedSensors, setSelectedSensors] = useState({
    landsat: true,
    sentinel1: false,
    sentinel2: false,
    palsar: false
  });
  
  // Region options from the code
  const regions = [
    'Sumatera',
    'Kalimantan', 
    'JawaBali',
    'Sulawesi',
    'Nusa',
    'Maluku',
    'Papua'
  ];

  const yearRange = Array.from(
    {length: 2024 - 1984 + 1}, 
    (_, i) => 1984 + i
  );

  const renderDatasetControls = () => (
    <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
      <div>
        <h3 className="text-lg font-medium mb-4">Dataset Selection</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div>
              <p className="font-medium">Landsat</p>
              <p className="text-sm text-gray-500">30m resolution</p>
            </div>
            <Switch 
              checked={selectedSensors.landsat}
              onCheckedChange={(checked) => 
                setSelectedSensors(prev => ({...prev, landsat: checked}))}
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div>
              <p className="font-medium">Sentinel-1</p>
              <p className="text-sm text-gray-500">10m resolution</p>
            </div>
            <Switch 
              checked={selectedSensors.sentinel1}
              onCheckedChange={(checked) => 
                setSelectedSensors(prev => ({...prev, sentinel1: checked}))}
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div>
              <p className="font-medium">Sentinel-2</p>
              <p className="text-sm text-gray-500">10m resolution</p>
            </div>
            <Switch 
              checked={selectedSensors.sentinel2}
              onCheckedChange={(checked) => 
                setSelectedSensors(prev => ({...prev, sentinel2: checked}))}
            />
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div>
              <p className="font-medium">PALSAR</p>
              <p className="text-sm text-gray-500">25m resolution</p>
            </div>
            <Switch 
              checked={selectedSensors.palsar}
              onCheckedChange={(checked) => 
                setSelectedSensors(prev => ({...prev, palsar: checked}))}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Temporal Settings</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Start Year</label>
            <Select value={startYear.toString()} onValueChange={(val) => setStartYear(parseInt(val))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {yearRange.map(year => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">End Year</label>
            <Select value={endYear.toString()} onValueChange={(val) => setEndYear(parseInt(val))}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {yearRange.map(year => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Processing Parameters</h3>
        <div>
          <label className="text-sm text-gray-600 mb-1 block">
            Cloud Cover Threshold: {cloudCover}%
          </label>
          <Slider
            value={[cloudCover]}
            onValueChange={([value]) => setCloudCover(value)}
            max={100}
            step={1}
          />
        </div>
      </div>
    </div>
  );

  const renderMapControls = () => (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button 
            variant="outline"
            className="flex items-center gap-2">
            <Settings size={16} />
            Map Control
          </Button>
          <Button
            variant="outline" 
            className="flex items-center gap-2">
            <Image size={16} />
            Focus Region
          </Button>
        </div>
        <Select value={selectedRegion} onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map(region => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="bg-white rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-200">
        Map Visualization Area
      </div>
    </div>
  );

  const renderAnalysisControls = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>Composite Generation</CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Layers size={16} />
              Generate Composite
            </Button>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Download size={16} />
              Export Results
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>Analysis Options</CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full flex items-center gap-2">
              <LineChart size={16} />
              Run Analysis
            </Button>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <RefreshCw size={16} />
              Process Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Remote Sensing Analysis</h2>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="map" className="space-y-4">
            <TabsList>
              <TabsTrigger value="map" className="flex items-center gap-2">
                <Map size={16} />
                Map View
              </TabsTrigger>
              <TabsTrigger value="dataset" className="flex items-center gap-2">
                <Layers size={16} />
                Dataset
              </TabsTrigger>
              <TabsTrigger value="analysis" className="flex items-center gap-2">
                <LineChart size={16} />
                Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map">
              {renderMapControls()}
            </TabsContent>

            <TabsContent value="dataset">
              {renderDatasetControls()}
            </TabsContent>

            <TabsContent value="analysis">
              {renderAnalysisControls()}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RemoteSensingUI;