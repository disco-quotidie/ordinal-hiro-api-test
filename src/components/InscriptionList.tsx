"use client"

import axios from "axios";
import {Inscription} from "@/components/Inscription";
import { useEffect, useState } from "react";
import {InscriptionType} from "@/interfaces/inscription";

const InscriptionList = () => {

  const [inscriptions, setInscriptions] = useState([])

  useEffect(() => {
    const getInscriptions = async () => {
      try {
        const response = await axios.get(`https://api.hiro.so/ordinals/v1/inscriptions`);
        // console.log(response.data.results);
        setInscriptions(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getInscriptions();
  }, []);

  return (
    <div>
      <h2>Inscription List</h2>
      {
        inscriptions.map((inscription: InscriptionType) => {
          return (
            <Inscription key={inscription.id} inscription={inscription} />
          )
        })
      }
    </div>
  )
}

export {InscriptionList}