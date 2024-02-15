const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180
    },
    {
      name: 'Some web development',
      duration: 120
    },
    {
      name: 'Fix homework for class10',
      duration: 20
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    }
  ];
  
  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 1.0
    },
    {
      name: 'Some more web development',
      duration: 180
    },
    {
      name: 'Staring out the window',
      duration: 10
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ];
  
  const hourlyRate = 20; // €20/hour
  
  //tasks to durations in hours
  const durations = [...monday, ...tuesday].map(task => task.duration / 60);
  
  //Filter out tasks that took less than two hours
  const filteredDurations = durations.filter(duration => duration >= 2);
  
  //Multiply each duration by the hourly rate and sum it all up
  const totalEarned = filteredDurations.reduce((acc, duration) => acc + duration * hourlyRate, 0);
  
  //Output a formatted Euro amount, rounded to Euro cents
  const formattedAmount = `€${totalEarned.toFixed(2)}`;
  
  console.log(formattedAmount);