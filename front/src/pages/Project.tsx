import React, { useState, useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Button,
    Tr,
    Th,
    Td,
    Checkbox,
    Menu,
    Text,
  MenuButton,
  MenuList,
  MenuItem,
  } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons';

  import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  
  
  const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache()
  });


export default function Projects() {
    const [projects, setProjects] = React.useState<string[]>([]);


    useEffect(getProjects, [projects]);

    function getProjects () {
        client
.query({
  query: gql`
    query getPosts {
      posts {
        data {
          id
          title
          body
        }
      }
    }
  `
})
.then(result => setProjects(result.data.posts.data));
    }


    

    return (
        <div>
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>
                            <Checkbox defaultIsChecked />
                        </Th>
                        <Th>Désignation</Th>
                        <Th>Statut</Th>
                        <Th>Avancement</Th>
                        <Th>Date</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {projects.map((item: any) => (
                        <Tr>
                            <Td><Checkbox /></Td>
                            <Td>{item.title}</Td>
                            <Td>centimetres (cm)</Td>
                        
                        </Tr>
                     ))}
                </Tbody>
                </Table>
        </div>
    )
}
