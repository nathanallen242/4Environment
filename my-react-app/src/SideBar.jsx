import React from 'react';

const Sidebar = ({ selectedFeature }) => {
  if (!selectedFeature) return null;

  // Helper function to format numbers with commas
  const formatNumber = num => num ? Intl.NumberFormat().format(num) : "N/A";

  // Inline styles
  const styles = {
    sidebar: {
      position: 'fixed',
      top: '20px', // Added top margin
      left: '20px', // Added left margin
      bottom: '20px', // Added bottom positioning for margin effect
      width: '350px',
      height: '100vh',
      maxHeight: 'calc(100vh - 40px)', // Adjusted from height to maxHeight
      overflowY: 'auto', // Ensures scrollability
      backgroundColor: 'white',
             color: '#ecf0f1',
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      zIndex: 1000,
      borderRadius: '20px', // Adds rounded corners
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Adds a shadow for a card-like effect

    },
    title: {
      color: 'green',
      borderBottom: '1px solid #ecf0f1',
      paddingBottom: '10px',
    },
    sectionTitle: {
      color: 'Green',
      marginTop: '20px',
    },
    paragraph: {
      lineHeight: '1.4',
      marginBottom: '10px',
      color: "black"
    },
  };

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>Detailed Area Information</h2>
      <p style={styles.paragraph}><strong>Location:</strong> {selectedFeature.County}, {selectedFeature.State}, Tract {selectedFeature.CensusTract}</p>
      <p style={styles.paragraph}><strong>Urban Tract:</strong> {selectedFeature.Urban === '1' ? 'Yes' : 'No'}</p>
      <p style={styles.paragraph}><strong>Population (2010):</strong> {formatNumber(selectedFeature.POP2010)}</p>
      <p style={styles.paragraph}><strong>Occupied Housing Units (2010):</strong> {formatNumber(selectedFeature.OHU2010)}</p>
      
      {/* Additional Details */}
      <h3 style={styles.sectionTitle}>Economic Indicators</h3>
      <p style={styles.paragraph}><strong>Poverty Rate:</strong> {selectedFeature.PovertyRate}%</p>
      <p style={styles.paragraph}><strong>Median Family Income:</strong> ${formatNumber(selectedFeature.MedianFamilyIncome)}</p>
      <p style={styles.paragraph}><strong>Low Income Tracts:</strong> {selectedFeature.LowIncomeTracts ? 'Yes' : 'No'}</p>
      <p style={styles.paragraph}><strong>SNAP Benefits Housing Units:</strong> {formatNumber(selectedFeature.TractSNAP)}</p>


      <h3 style={styles.sectionTitle}>Access to Food</h3>
      <p style={styles.paragraph}><strong>Food Desert (1 & 10 mile):</strong> {selectedFeature.LILATracts_1And10 ? 'Yes' : 'No'}</p>
      <p style={styles.paragraph}><strong>Low Vehicle Access:</strong> {selectedFeature.HUNVFlag ? 'Yes' : 'No'}</p>

      <h3 style={styles.sectionTitle}>Demographics</h3>
      <p style={styles.paragraph}><strong>Children (0-17):</strong> {formatNumber(selectedFeature.TractKids)}</p>
      <p style={styles.paragraph}><strong>Seniors (65+):</strong> {formatNumber(selectedFeature.TractSeniors)}</p>
      <p style={styles.paragraph}><strong>Black or African American:</strong> {formatNumber(selectedFeature.TractBlack)}</p>
      <p style={styles.paragraph}><strong>Hispanic or Latino:</strong> {formatNumber(selectedFeature.TractHispanic)}</p>
      <p style={styles.paragraph}><strong>Asian:</strong> {formatNumber(selectedFeature.TractAsian)}</p>
      {/* Add more demographics as needed */}
    </div>
  );
};

export default Sidebar;
