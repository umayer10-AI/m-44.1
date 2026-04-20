import React from 'react';
import {CircleDollar} from "@gravity-ui/icons";
import {Card, Link} from "@heroui/react";

const TaskCart = ({p}) => {
    return (
        <Card variant='primary' className="border-2">
      <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
      <Card.Header>
        <Card.Title>{p.title}!</Card.Title>
        <Card.Description>
          {p.description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
    );
};

export default TaskCart;