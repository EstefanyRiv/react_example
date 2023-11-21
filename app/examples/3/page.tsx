
import Card, { ICardProperties } from '@/components/Card'
import UserContenido from '@/components/UserContenido';
import { Metadata } from 'next';
import React, { ChangeEvent, useState } from 'react'

export const metadata:Metadata = {
  title: 'Ejemplo 3'

}



const Example3 = () => {
  return<UserContenido/>
}

export default Example3