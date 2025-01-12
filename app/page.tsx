"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Brand = {
  id: string;
  name: string;
  logo: string;
};