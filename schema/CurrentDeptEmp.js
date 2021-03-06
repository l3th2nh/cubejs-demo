cube(`CurrentDeptEmp`, {
  sql: `SELECT * FROM employees.current_dept_emp`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [fromDate, toDate]
    }
  },
  
  dimensions: {
    deptNo: {
      sql: `dept_no`,
      type: `string`
    },
    
    fromDate: {
      sql: `from_date`,
      type: `time`
    },
    
    toDate: {
      sql: `to_date`,
      type: `time`
    }
  }
});
