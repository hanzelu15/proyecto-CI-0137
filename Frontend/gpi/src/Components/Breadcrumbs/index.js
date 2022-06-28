import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <React.Fragment>
     {breadcrumbs.map(({
        match,
        breadcrumb
      }) => (
        <span key={match.pathname}>
          <NavLink to={match.pathname}>{breadcrumb}</NavLink>
        </span>
      ))}
    </React.Fragment>
  );
}