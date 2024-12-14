import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* About Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2">
                            We are dedicated to providing the best services to our customers. Contact us for more
                            information about our offerings.
                        </Typography>
                    </Grid>

                    {/* Links Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Useful Links
                        </Typography>
                        <Link href="#" color="inherit" underline="hover">
                            Home
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            About
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            Contact
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="hover">
                            Privacy Policy
                        </Link>
                    </Grid>

                    {/* Contact Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            Email: support@example.com
                        </Typography>
                        <Typography variant="body2">
                            Phone: +1 234 567 890
                        </Typography>
                        <Typography variant="body2">
                            Address: 123 Main Street, Anytown, USA
                        </Typography>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 4,
                        textAlign: 'center',
                        borderTop: 1,
                        borderColor: 'divider',
                        pt: 2,
                    }}
                >
                    <Typography variant="body2">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
