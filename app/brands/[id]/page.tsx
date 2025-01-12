"use client";
import { useEffect, useState } from 'react';

type Shoe = {
  id: string;
  name: string;
  image: string;
  price: number;
  sizes: string[];
};